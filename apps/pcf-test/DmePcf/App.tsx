import * as React from 'react';
import { Button } from "ui/src/button";
import { Card } from "ui/src/card";

export interface IAppProps {
  name?: string;
}

export class App extends React.Component<IAppProps> {
  public render(): React.ReactNode {
    return (
      // <Label>
      //   {this.props.name}
      // </Label>
      <>
      <Button />
      <Card title="Hello" href="https://www.google.com">
        Hello World
      <h1>Hello World</h1>
      </Card>
      </>
    )
  }
}
