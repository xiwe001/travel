import React,{useEffect} from "react";
import {
  Header,
  Footer,
  Carousel,
  SideMenu,
  ProductCollection,
  BusinessPartners,
} from "../../components";
import { Row, Col, Typography,Spin } from "antd";
import { productList1, productList2, productList3 } from "./mockups";
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import styles from "./HomePage.module.css";

//redux1
import { giveMeDataActionCreator,fetchRecommendProductFailActionCreator } from '../../redux/recommendProducts/recommendProductsActions';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';

export const HomePage = ()=>{
  //redux2
  const productState = useSelector((state)=>state.recommandProducts)  
  const dispatch = useDispatch()
  const mapDispatch = (dispatch) =>{
    return {
      giveMeData:()=>{
        dispatch(giveMeDataActionCreator())
      },
      handleError:(e)=>{
        dispatch(fetchRecommendProductFailActionCreator(e))
      }
    }
  }

  useEffect(()=>{    
    try{
      mapDispatch(dispatch).giveMeData()
    }
    catch(e){
      mapDispatch(dispatch).handleError(e)
    }

  },[])

  if(productState.loading){
    return <Spin size="large" style={{
      marginTop:200,
      marginBottom:200,
      marginLeft:"auto",
      marginRight:"auto",
      width:"100%"
    }}/>
  }

  if(productState.error){
    return <div>网站出错：{productState.error}</div>
  }
  
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
               {productState.productList[0].title}
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList1}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              {productState.productList[0].title}
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList2}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
               {productState.productList[1].title}
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList3}
        />
        <BusinessPartners />
      </div>
      <Footer />
    </>
  );
}



