import React from "react";
import { useParams } from "react-router-dom";

export const Detail: React.FC = () => {
  const {id,name} = useParams()
  return <h1>路游路线详情页面, 路线ID: {id}，名称是：{name}</h1>;
};
