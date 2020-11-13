import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const FunctionalComponentDemo = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <div className="textAlignLeft">
          <h1>Functional Component</h1>
          <p className="subtitle">
            Functional Components are the primary tool in React to build a
            small, modular piece of your page.
          </p>
          <dl>
            <dt>Can use state</dt>
            <dd>
              With the 'useState' hook, functional components hav no 'this'
              object.
            </dd>

            <dt>No "this" keyword</dt>
            <dd>
              Older class components use 'this'; functional components have no
              'this' object.
            </dd>

            <dt>Can use effects</dt>
            <dd>
              With the 'useEffect' hook, functional components can perform side
              effect with any props or state changes.
            </dd>

            <dt>return()</dt>
            <dd>
              Must return a single element, but this element may have nested
              elements inside.
            </dd>
          </dl>
          <h1>Functional Syntax versus Arrow Function</h1>
          <hr />
        </div>
      </div>
    </div>
  );
};

const FatArrowCard = () => {
  return(
    <div>
     <Card>
      <CardImg top width="100%" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fjavascript-in-plain-english%2Farrow-functions-vs-regular-functions-in-javascript-f98687f23a6d&psig=AOvVaw1uynckNYIjgO9zzV1ZUD8Q&ust=1605316051091000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDC37mq_uwCFQAAAAAdAAAAABAI" alt="Img" />
      <CardBody>
        <CardTitle tag="h5">Fat Arrow Function</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">A JS Library</CardSubtitle>
        <CardText><pre>const HelloWolrd = () {'=>'} </pre></CardText>
        <Button>Go somewhere man</Button>
      </CardBody>
     </Card>
    </div>
  )
}

export default FunctionalComponentDemo;
