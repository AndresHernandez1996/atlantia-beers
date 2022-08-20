// Dependencies
import React from "react"
import { Link } from "react-router-dom"
import { Col, Image, Layout, Menu, Row } from "antd"
// Matrix of routes
import { navmMatrix } from "../commons/constants"
import Logo from "../assets/logo.png"

const { Header } = Layout
const { Item } = Menu

const Navbar = () => {
  return (
    <Header className="header">
      <Row>
        <Col span={5}>
          <Link to="/home">
            <Image
              src={Logo}
              preview={false}
              alt="atlantia_search"
              height={63}
            />
          </Link>
        </Col>
        <Col span={19}>
          <Menu mode="horizontal" selectable={false}>
            {navmMatrix.map((item) => {
              return (
                <Item key={item.key}>
                  <Link to={item.url}>{item.componentName}</Link>
                </Item>
              )
            })}
          </Menu>
        </Col>
      </Row>
    </Header>
  )
}

export default Navbar
