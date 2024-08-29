// reactstrap components
import { Card, CardHeader, Table, Container, Row } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const SalarySheet = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Salary Sheet of May 2024</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Basic</th>
                    <th scope="col">Allowances</th>
                    <th scope="col">Deductions</th>
                    <th scope="col">Net Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "056", name: "N.S.Aniruth", designation: "SE" },
                    { id: "055", name: "D.S.Nisha", designation: "UI/UX" },
                    { id: "054", name: "U.W.Ashen", designation: "QA" },
                    { id: "053", name: "N.S.Malithi", designation: "DevOps" },
                  ].map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.designation}</td>
                      <td>Rs.</td>
                      <td>Rs.</td>
                      <td>Rs.</td>
                      <td>Rs.</td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row" colSpan="3">
                      Total Salary Amount
                    </th>
                    <td>Rs.</td>
                    <td>Rs.</td>
                    <td>Rs.</td>
                    <td>Rs.</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
      </Container>
    </>
  );
};

export default SalarySheet;
