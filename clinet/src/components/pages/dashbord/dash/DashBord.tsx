import {
  Button,
  Center,
  Flex,
  Icon,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddNode from "./addModel/AddNode";
import { CheckCircleIcon } from "@chakra-ui/icons";

interface node {
  node_id: string;
  active: string;
  node_name: string;
  user_id: string;
}

function DashBord() {
  const [Nodes, setNodes] = useState([]);
  const navigate = useNavigate();
  const getAllNodes = async () => {
    await axios
      .get("http://localhost:5000/api/v1/nodes/getnodes", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setNodes(res.data.nodeList);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    getAllNodes();
    // eslint-disable-next-line
  }, []);

  return (
    <SimpleGrid pt={["15vh","15vh"]} columns={[1]} w={"100vw"}>
      <Center px={"25%"}></Center>
      <Flex justifyContent={"end"} w={"90%"}>
        <AddNode />
        {/* add model */}
      </Flex>
      <Center mt={5}>
        <TableContainer
          w={"80%"}
          border={"1px"}
          borderColor={"white"}
          borderRadius={"5px"}
        >
          <Table size="lg">
            <Thead bg={'gray.700'}>
              <Tr my={5}>
                <Td>#</Td>
                <Td>Node Name</Td>
                <Td>Active</Td>
                <Td></Td>
              </Tr>
            </Thead>
            <Tbody>
              {Nodes.map((elm: node, i) => {
                return (
                  <Tr key={i}>
                    <Td>{i}</Td>
                    <Td>{elm.node_name}</Td>
                    <Td>
                      {elm.active ? (
                        <CheckCircleIcon boxSize={8} color="green.500" />
                      ) : (
                        <Icon viewBox="0 0 200 200" color="red.500">
                          <path
                            fill="currentColor"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                          />
                        </Icon>
                      )}
                    </Td>
                    <Td>
                      <Button
                        colorScheme="green"
                        size="md"
                        data-id={elm.node_id}
                        onClick={() => {
                          navigate("/edit/" + elm.node_id);
                        }}
                      >
                        show
                      </Button>
                      {/* <Edit/> */}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </SimpleGrid>
  );
}

export default DashBord;
