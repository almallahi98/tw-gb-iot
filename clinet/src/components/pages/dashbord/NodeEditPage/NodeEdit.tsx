import {
  Box,
  Button,
  Center,
  Flex,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BarChar from "../charts/Bar";
import LineChart from "../charts/Charts";
import { nodeData, sensor } from "../dash/addModel/AddNode";
import EditNameActiv from "./EditNameActive";

function NodeEdit() {
  const [nData, setnDate] = useState<nodeData>({
    node_id: "",
    node_name: "",
    active: "true",
    sensors: [],
  });
  const [Sensors, setSensors] = useState<Array<sensor>>([
    {
      sensors_name: "",
      sensors_target_value: "",
      type: "",
      end_r: "",
      start_r: "",
    },
  ]);
  const toast = useToast();
  const routeParams = useParams();

  const deleteSeneor = async (d: any) => {
    await axios
      .delete(`http://localhost:5000/api/v1/sensors/deletesenosr/${d}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast({
            duration: 3000,
            colorScheme: "green",
            description: res.data.message,
            position: "bottom",
          });
          getNode();
        }
      });
  };

  const getNode = async () => {
    await axios
      .get("http://localhost:5000/api/v1/nodes/getnode/" + routeParams.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const d = res.data as nodeData;
        setnDate({
          ...nData,
          node_id: d.node_id,
          active: d.active,
          node_name: d.node_name,
        });
        console.log("nData");
      });
  };

  const deleteNode = async (id: any) => {
    await axios
      .delete(`http://localhost:5000/api/v1/sensors/deletenode/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast({
            duration: 3000,
            colorScheme: "green",
            description: res.data.message,
            position: "bottom",
          });
          navigate("/dash");
        }
      });
  };

  const getSensors = async () => {
    await axios
      .get(
        "http://localhost:5000/api/v1/sensors/getseneors/" + routeParams.id,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setSensors([...res.data]);
        console.log(Sensors);
      });
  };
  useEffect(() => {
    getNode();
    getSensors();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();
  console.log(routeParams.id);

  return (
    <>
      <SimpleGrid px={4} pt={"15vh"} columns={[1, 2]}>
        <Center h={"450px"}>
          <LineChart />
        </Center>
        {/* <Box><DoughnutCahrt /></Box> */}
        <Center h={"450px"}>
          <BarChar />
        </Center>
      </SimpleGrid>
      <Flex py={"15px"} px={"20px"} bg={"whiteAlpha.400"} mt={"100px"}>
        <Box>
          <Flex mt={"40px"}>
            <Text fontWeight={"extrabold"}>Node Id: {nData.node_id}</Text>
            <Text fontWeight={"thin"} ml={"10px"}>
              the node id will be you reference to the Node
            </Text>
          </Flex>
          {/* <Text>{nData.active}</Text> */}
          <Flex>
            <Text mt={"20px"} fontWeight={"extrabold"}>
              {" "}
              node name : {nData.node_name}
            </Text>
            <Text fontWeight={"thin"} mt={"20px"} ml={"10px"}>
              the Node Name is just a away to help you to memorize insted of
              useing the address
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Center m={5} p={5} bg={"greay"} borderRadius={"5px"}>
        <EditNameActiv setnDate={setnDate} nData={nData} />
        <Button p={"25px"} colorScheme={"yellow"} onClick={() => {}}>
          Edit Node
        </Button>
        <Button
          ml={"5px"}
          p={"25px"}
          colorScheme={"red"}
          attr-data={nData.node_id}
          onClick={(e) => {
            // delete node
            deleteNode(e.currentTarget.getAttribute("attr-data"));
            //console.log(e.currentTarget.getAttribute('attr-data'));
          }}
        >
          Delete
        </Button>
      </Center>

      <Center pt={"20px"} w={"100%"}>
        <TableContainer
          w={"80%"}
          border={"1px"}
          borderColor={"white"}
          borderRadius={"5px"}
        >
          <Table size="sm">
            <Thead>
              <Tr>
                <Td>#</Td>
                <Td>Node Name</Td>
                <Td>target value</Td>
                <Td>sensor start range</Td>
                <Td>sensor end range</Td>
                <Td>sensor type</Td>
                <Td>Sensor id</Td>
                <Td>Delete Sensor</Td>
              </Tr>
            </Thead>
            <Tbody>
              {Sensors.map((elm, i) => {
                return (
                  <Tr key={i}>
                    <Td>{i}</Td>
                    <Td>{elm.sensors_name}</Td>
                    <Td>{elm.sensors_target_value}</Td>
                    <Td>{elm.start_r}</Td>
                    <Td>{elm.end_r}</Td>
                    <Td>{elm.type}</Td>
                    <Td>{elm.sensors_id}</Td>
                    <Td>
                      <Button
                        colorScheme={"red"}
                        attr-data={elm.sensors_id}
                        onClick={(e) => {
                          deleteSeneor(
                            e.currentTarget.getAttribute("attr-data")
                          );
                        }}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </>
  );
}

export default NodeEdit;
