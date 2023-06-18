import React from 'react';
import Button from '../components/Shared/Buttons';

export default function TestButtonPage() {
  return (
    <div>
      <Button variant="outline" color="grey" size="large" label="prêt hypothécaire" />
      <Button variant="outline" color="grey" size="large" label="A1" />
      <Button color="primary" size="large" label="testButton" />
    </div>
  );
}
