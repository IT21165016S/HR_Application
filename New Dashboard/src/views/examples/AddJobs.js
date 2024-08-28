import Header from "components/Headers/Header";
import React from "react";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Container,
  Row,
  CardHeader,
} from "reactstrap";

const AddJobs = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="d-flex justify-content-center">
          <div className="col-md-10">
            <Card className="shadow">
              <CardHeader className="text-center">
                <h3 className="mb-0">Job Description Form</h3>
              </CardHeader>
              <Form className="p-4">
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="jobPosition">Job Position</Label>
                      <Input
                        id="jobPosition"
                        name="jobPosition"
                        placeholder="Job Position"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Company"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="jobType">Job Type</Label>
                      <Input id="jobType" name="jobType" type="select">
                        <option>Select</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="timePeriod">Time Period</Label>
                      <Input
                        id="timePeriod"
                        name="timePeriod"
                        placeholder="Time period"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="location">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        placeholder="Location"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="salary">Salary</Label>
                      <Input
                        id="salary"
                        name="salary"
                        placeholder="Salary"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="generalDescription">General Description</Label>
                  <Input
                    id="generalDescription"
                    name="generalDescription"
                    type="textarea"
                    placeholder="General Description"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="workExperience">
                    Work Experience Requirements
                  </Label>
                  <Input
                    id="workExperience"
                    name="workExperience"
                    type="textarea"
                    placeholder="Work Experience Requirements"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="educationRequirements">
                    Education Requirements
                  </Label>
                  <Input
                    id="educationRequirements"
                    name="educationRequirements"
                    type="textarea"
                    placeholder="Education Requirements"
                  />
                </FormGroup>
                <div className="d-flex justify-content-center mt-4">
                  <Button className="mr-3" color="primary">
                    Submit
                  </Button>
                  <Button color="secondary" type="reset">
                    Reset
                  </Button>
                </div>
              </Form>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AddJobs;
