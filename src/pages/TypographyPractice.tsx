import React from "react";
import { Space, Typography } from "antd";
import zomato from "../assets/zomato.png";

const { Text, Title } = Typography;
const TypographyPractice = () => {
  return (                                
    <div>
      <img
        src={zomato}
        alt=""
        className=" pl-64 pr-64"
      />
      <Text type="secondary" className="pl-64 pt-6">
        {" "}  
        Shuvra Saha | December 27, 2024 | 5 min read 
      </Text>

      <Title editable level={1} style={{ margin: 0 }} className="pl-64 pt-6">
        The Big Brand Theory | Carving a Spice <br /> Trail from Tamil Nadu to
        5+ Countries
      </Title>
      <Title  level={4} className="pl-64  pt-10">
        Dindigul Thalappakatti (previously Ananda Vilas Biriyani Hotel) was
        established in 1957 by <br /> Mr. Nagaswami Naidu in Dindigul, Tamil
        Nadu. The eatery quickly gained fame for its biryani, <br /> which was
        inspired by his wife Kannamma’s handcrafted recipes known for their rich
        flavour <br /> and generous spices. Today, Dindigul Thalappakatti
        Biriyani stands tall and features 104 <br /> outlets across six
        countries, each one upholding the legacy of genuine taste and variety.
      </Title>

    </div>
  );
};
export default TypographyPractice;
