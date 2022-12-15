#include <ArduinoJson.h>

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <SimpleDHT.h>

//**********************//
//server info
int dev_id = 6;
int soil_comp;
int temp_comp;
int light_comp;
int hum_comp;
int pinDHT11 = D6;
//int soil_sensor_pin;
//************************//


int soil_sensor_pin = A0;
int w_pump_relay = D2;
int photocell = D5;
int photocell_read;
int light = D4;
int light_triger;
int fan_relay = D1;
int soil_data_row;
SimpleDHT11 dht11;
const int arrsize = 5;


void setup()
{
  //delay to boot the device
  delay(3000);
  Serial.begin(9600);  /* initialise serial communication */
  pinMode(w_pump_relay, OUTPUT);
  pinMode(fan_relay, OUTPUT);
  pinMode(light, OUTPUT);
  WiFi.mode(WIFI_STA);
  WiFi.begin("Almasa 4", "100200300");
  Serial.println("Connecting");

  soil_comp = 90;
  temp_comp = 25;
  light_comp = 1;
  hum_comp = 70;
}

void loop()
{
WiFiClient client;
  HTTPClient http;
  StaticJsonBuffer<10000> JSONBuffer;//declared JsonBuffer size 800 bytes
  byte temperature = 0;
  byte humidity = 0;
  
  if (dht11.read(pinDHT11, &temperature, &humidity, NULL))
  {
    Serial.print("Read DHT11 failed.");
    delay(1000);
    return;
  }
  //check for the wifi connaction
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  //Specify request destination
  http.begin(client,"http://192.168.100.140:5000/api/v1/nodeinput/insertdata/b4b23727-2ede-47ac-a33a-45da9f83faf1");
  http.addHeader("Content-Type", "application/json");  //Specify content-type header
 
  int httpCode = http.POST( "[{\"input_value\":"+String(humidity)+",\"sensor_id\":\"43c84138-75ac-4f94-be81-8f1b0cd9090b\"},{\"input_value\":"+String(temperature)+",\"sensor_id\":\"a795f41c-bb88-4382-8e76-65d70de45b6c\"}]");
  //Send the request device id to api
  Serial.print("Request Status: ");
  Serial.println(httpCode);

  Serial.println("connecting to the server");
  delay(1000);
  //Serial.println("flag=ard&dev_id=6");
  String payload = http.getString();                   //Get the response payload
  Serial.println(payload);
  JsonArray&  parsed = JSONBuffer.parseArray(payload);
  for (int x = 0; x < parsed.size(); x++)
  {
    JsonObject& js_ob = parsed[x];
    const char* comp = js_ob["seneor_type"];
    const char* xx = js_ob["default_val"];
    int vv = atoi(xx);
    if (strcmp(comp, "soil") == 0) {
      soil_comp = vv;
    }
    if (strcmp(comp, "temp") == 0) {
      temp_comp = vv;
    }
    if (strcmp(comp, "light") == 0) {
      light_comp = vv;
    }
    if (strcmp(comp, "humidity") == 0) {
      hum_comp = vv;
    }

    //Serial.println(comp);
    //Serial.println(vv);




    Serial.println(httpCode);   //Print HTTP return code
    Serial.println(payload);    //Print request response payload
    http.end();//Close connection
  }

  Serial.println(soil_comp);
  Serial.println(temp_comp);
  Serial.println(light_comp);
  Serial.println(hum_comp);
  photocell_read = analogRead(photocell);
  Serial.print("photocell: ");
  Serial.println(photocell_read);

  soil_data_row = analogRead(soil_sensor_pin);
  Serial.print(soil_data_row);
  int soil_data_row2 = analogRead(soil_sensor_pin);
  soil_data_row = map(soil_data_row, 1023, 255, 0, 100);
  Serial.print("Mosisture:");
  Serial.print(soil_data_row);
  Serial.println("%");//end of Mosisture
  Serial.print((int)temperature);
  Serial.println(" C"); // write the temperature note: just delete * 1.8 + 32 //to display// in celcius
  Serial.print("Humidity: ");
  Serial.print((int)humidity);
  Serial.println(" %");
  Serial.println(soil_data_row2);

  if ((int)soil_data_row < soil_comp)
  {
    digitalWrite(w_pump_relay, HIGH);
    Serial.println("water open");
    delay(5000);
    digitalWrite(w_pump_relay, LOW);
    Serial.println("water closed");
    delay(5000);

  }

  if ((int)temperature > temp_comp || (int)humidity > hum_comp)
  {
    digitalWrite(fan_relay, HIGH);
    Serial.println("FAN ON");

  }
  else
  {
    digitalWrite(fan_relay, LOW);
    Serial.println("FAN OFF");
  }

  //if(light_comp=1){light_triger=1;}else if(light_comp=0){light_triger=0;}

  switch (light_comp) {
    case 0:
      digitalWrite(light, LOW);
      break;
    case 1:
      if (light_comp = 1 || photocell_read < 1023) {
        digitalWrite(light, HIGH);
      }
      break;
    case 2:
      if (photocell_read <= 0) {
        digitalWrite(light, HIGH);
      } else {
        digitalWrite(light, LOW);
      }
      break;
  }


  delay(1500);
  //digitalWrite(w_pump_relay,LOW);
  //digitalWrite(fan_relay,LOW);
}


