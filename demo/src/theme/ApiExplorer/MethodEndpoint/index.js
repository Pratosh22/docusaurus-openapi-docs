import React from "react";
import MethodEndpoint from "@theme-original/ApiExplorer/MethodEndpoint";
import RequestTable from "../../../components/RequestTable";
export default function MethodEndpointWrapper(props) {
  return (
    <>
      <MethodEndpoint {...props} />
      <RequestTable key={Math.random()} {...props} />
    </>
  );
}
