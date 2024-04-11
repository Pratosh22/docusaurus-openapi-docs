import React, { useState, useEffect } from "react";
import { matchPath } from "react-router-dom";
import { Box, Table, Thead, Tbody, Flex, Text } from "@sparrowengg/twigs-react";
import { useSelector, useDispatch } from "react-redux";
import {
  setResponse,
  setCode,
  setHeaders,
  clearCode,
  clearHeaders,
  clearResponse,
} from "../theme/ApiExplorer/Response/slice";

function RequestTable(props) {
  const dispatch = useDispatch();
  const responsesFromRedux = useSelector((state) => state.response.responses);
  const [responses, setResponses] = useState(responsesFromRedux || []);
  useEffect(() => {
    const responsesFromLocalStorage =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("responses")) || []
        : [];
    setResponses(responsesFromLocalStorage);
  }, [props.key, responsesFromRedux]);
  const filteredResponses = Array.isArray(responses)
    ? responses.filter(
        (response) =>
          new URL(response.responsePath).pathname === props.path &&
          response.method === props.method.toUpperCase()
      )
    : [];

  return (
    <>
      <Box
        css={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          marginBottom: "15px",
        }}
      >
        <Flex
          css={{
            justifyContent: "space-between",
            alignItems: "center",
            background: "#f8f8f8",
          }}
        >
          <Flex
            gap="4px"
            css={{
              padding: "10px 0",
            }}
          >
            <Text
              size="md"
              css={{
                marginLeft: "10px",
                marginBottom: "2px",
                fontWeight: "600",
              }}
            >
              {filteredResponses.length}
            </Text>
            <Text
              size="md"
              css={{
                marginBottom: "2px",
                fontWeight: "600",
              }}
            >
              Calls
            </Text>
          </Flex>
        </Flex>
        <Table
          css={{
            width: "100%",
            borderWidth: "1px",
            borderColor: "#f0f0f0",
            marginBottom: "0",
          }}
        >
          <Thead
            css={{
              color: "#637288",
              fontSize: "12px",
              fontWeight: "600",
              textTransform: "uppercase",
              "& th:last-child": {
                width: "100%",
              },
              textAlign: "justify",
            }}
          >
            <tr>
              <th>Status</th>
              <th>Path</th>
              <th>Time</th>
            </tr>
          </Thead>
          <Tbody
            css={{
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            {filteredResponses.length === 0 ? (
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  Make a request to see history.
                </td>
              </tr>
            ) : (
              filteredResponses.map((response, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    dispatch(clearResponse());
                    dispatch(clearCode());
                    dispatch(clearHeaders());
                    setTimeout(() => {
                      dispatch(setResponse(response.data));
                      dispatch(setCode(response.responseCode));
                      dispatch(setHeaders(response.responseHeaders));
                    }, 1000);
                    const responseView = document.getElementsByClassName(
                      "openapi-explorer__response-container"
                    )[0];
                    responseView.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <td>
                    <span
                      style={{
                        height: "10px",
                        width: "10px",
                        backgroundColor:
                          response.responseCode >= 200 &&
                          response.responseCode < 300
                            ? "green"
                            : "red",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginRight: "5px",
                      }}
                    />
                    {response.responseCode}
                  </td>
                  <td>{props.path}</td>
                  <td>{response.timeOfResponse}</td>
                </tr>
              ))
            )}
          </Tbody>
        </Table>
      </Box>
    </>
  );
}

export default RequestTable;
