import React from "react";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
function Cards() {
  const state = useSelector((state) => state);
  return (
    <>
      <div className="row ">
        <div className="col">
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src={
                "https://viralsaints.priceyouridea.com/assets/images/total_campaign.svg "
              }
              alt="img"
              width="100px"
              height="100px"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>
                {state.meta.campaing_group?.total_campaigns}
              </Card.Title>
              <Card.Text>{"Total Campaigns"}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card style={{ width: "15rem", height: "12rem" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>
                {state.meta.campaign_status_in_percent
                  ?.ongoing_campaign_in_percent +
                  "%" +
                  " "}
                {state.meta.campaing_group?.ongoing_campaigns}
              </Card.Title>
              <Card.Text>{"Ongoing Campaigns"}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card style={{ width: "15rem", height: "12rem" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>
                {state.meta.campaign_status_in_percent
                  ?.completed_campaign_in_percent +
                  "%" +
                  " "}
                {state.meta.campaing_group?.completed_campaigns}
              </Card.Title>
              <Card.Text>{"Completed Campaigns"}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card style={{ width: "15rem", height: "12rem" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>
                {state.meta.campaign_status_in_percent
                  ?.not_started_campaign_in_percent +
                  "%" +
                  " "}
                {state.meta.campaing_group?.not_started_campaigns}
              </Card.Title>
              <Card.Text>{"Not Started Campaigns"}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
export default withRouter(Cards);
