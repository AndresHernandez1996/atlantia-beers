//Dependencies
import React, { useState, useEffect } from "react"

// Utils
import requestApi from "../utils/requestApi"

// Constants
import { apiMatrix, DEFAULT_TABLE_SIZE } from "../commons/constants"

import { Image, Table, Typography, Row, Button, Col } from "antd"
const { Title } = Typography

const ComparativeAnalytics = () => {
  const [tableSize, setTableSize] = useState(DEFAULT_TABLE_SIZE)
  const [comparativeData, setComparativeData] = useState([])

  useEffect(() => {
    requestApi(apiMatrix.beerProducts, setComparativeData)
  }, [])

  const columns = [
    {
      dataIndex: "productImage",
      render: (image) => (
        <>
          <Image src={image} preview={false} height={131} width={121} />
        </>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "% Presence",
      dataIndex: "persistence",
      key: "persistence",
      render: (persistence) => (
        <span
          className={`${persistence <= 0 ? "redPresence" : "greenPresence"}`}>
          {persistence}
        </span>
      ),
    },
    {
      title: "Av. Price",
      dataIndex: "averagePrice",
      key: "averagePrice",
    },
    {
      title: "Av. position",
      dataIndex: "averagePosition",
      key: "averagePosition",
    },
  ]

  return (
    <>
      <Title level={3} className="my-2">
        Comparative Analysis
      </Title>
      <Table
        id="genericGraphTable"
        columns={columns}
        dataSource={comparativeData}
        rowKey={(key) => key.id}
        scroll={{ x: "100%" }}
        pagination={{
          pageSize: tableSize,
          position: ["none", "none"],
        }}
      />
      <Row>
        <Col
          lg={{ span: 6, offset: 9 }}
          md={{ span: 8, offset: 8 }}
          xs={{ span: 12, offset: 6 }}>
          <Button
            className="mt-2"
            type="primary"
            id="droptTable"
            block
            onClick={() =>
              setTableSize(
                tableSize === DEFAULT_TABLE_SIZE
                  ? comparativeData.length
                  : DEFAULT_TABLE_SIZE
              )
            }>
            {tableSize === DEFAULT_TABLE_SIZE ? <>Ver todo</> : <>Ver menos</>}
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default ComparativeAnalytics
