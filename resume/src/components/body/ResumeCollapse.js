import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Table } from 'reactstrap';

// Collapse Body

class ResumeCollapse extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <h2> Experience </h2>
        <Table hover>
          <tbody>
            <tr>
              <th scope="row" onClick={this.toggle}>
                {' '}
                Dixie Plywood & Lumber Co.{' '}
              </th>
              <td>Houston, Texas</td>
              <td>Outside Sales</td>
              <td>March 2017 – Current</td>
            </tr>
            <tr>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    Responsible for growing and managing Northern territory
                    Development of the Industrial push in the Houston Market
                  </CardBody>
                </Card>
              </Collapse>
            </tr>
            <tr>
              <th scope="row" onClick={this.toggle}>
                {' '}
                Central Hardwoods – Dallas, Texas{' '}
              </th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    Responsible for growing and managing Northern territory
                    Development of the Industrial push in the Houston Market
                  </CardBody>
                </Card>
              </Collapse>
            </tr>
            <tr>
              <th scope="row" onClick={this.toggle}>
                {' '}
                McKillican – Houston, Texas{' '}
              </th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    Responsible for growing and managing Northern territory
                    Development of the Industrial push in the Houston Market
                  </CardBody>
                </Card>
              </Collapse>
            </tr>
            <tr>
              <th scope="row" onClick={this.toggle}>
                {' '}
                Classic Chevy Sugar Land – Houston, Texas{' '}
              </th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    Responsible for growing and managing Northern territory
                    Development of the Industrial push in the Houston Market
                  </CardBody>
                </Card>
              </Collapse>
            </tr>
            <tr>
              <th scope="row" onClick={this.toggle}>
                {' '}
                Don McGill Toyota of Katy – Katy, Texas{' '}
              </th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    Responsible for growing and managing Northern territory
                    Development of the Industrial push in the Houston Market
                  </CardBody>
                </Card>
              </Collapse>
            </tr>
            <tr>
              <th scope="row" onClick={this.toggle}>
                {' '}
                Advantage Sales and Marketing{' '}
              </th>
              <td>Houston, Texas</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    Responsible for growing and managing Northern territory
                    Development of the Industrial push in the Houston Market
                  </CardBody>
                </Card>
              </Collapse>
            </tr>
            <tr>
              <th scope="row" onClick={this.toggle}>
                {' '}
                The Hardwood Store, LLC{' '}
              </th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    Responsible for growing and managing Northern territory
                    Development of the Industrial push in the Houston Market
                  </CardBody>
                </Card>
              </Collapse>
            </tr>
            <tr>
              <th scope="row" onClick={this.toggle}>
                {' '}
                Northwest Trim & Cabinet Co, LLC{' '}
              </th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    Responsible for growing and managing Northern territory
                    Development of the Industrial push in the Houston Market
                  </CardBody>
                </Card>
              </Collapse>
            </tr>
            <tr>
              <th scope="row" onClick={this.toggle}>
                {' '}
                Aura Hardwoods{' '}
              </th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    Responsible for growing and managing Northern territory
                    Development of the Industrial push in the Houston Market
                  </CardBody>
                </Card>
              </Collapse>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ResumeCollapse;
