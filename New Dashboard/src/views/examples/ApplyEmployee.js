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

const ApplyEmployee = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="d-flex justify-content-center">
          <div className="col-md-8">
            <Card className="shadow">
              <CardHeader className="text-center">
                <h3 className="mb-0">Join Our Team</h3>
                <p className="text-muted">
                  DO YOU WANT TO WORK WITH US? PLEASE FILL YOUR DETAILS BELOW.
                </p>
              </CardHeader>
              <Form className="p-4">
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Address"
                    type="textarea"
                  />
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="position">Position Applying For</Label>
                      <Input
                        id="position"
                        name="position"
                        placeholder="Position Applying For"
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
                <FormGroup>
                  <Label for="cvUpload">Upload your CV here</Label>
                  <Input id="cvUpload" name="file" type="file" />
                </FormGroup>
                <div className="d-flex justify-content-center mt-4">
                  <Button className="mr-3" color="primary">
                    Submit
                  </Button>
                  <Button color="secondary">Cancel</Button>
                </div>
              </Form>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ApplyEmployee;
