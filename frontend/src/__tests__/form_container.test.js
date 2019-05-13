import React from "react";
import FormContainer from "../containers/Form_container";
import { render, fireEvent, cleanup, wait } from "react-testing-library";

const setup = () => {
  const utils = render(<FormContainer />);
  const baseInput = utils.getByLabelText('base-amount');
  const interestInput = utils.getByLabelText('annual-interest')
  const yearsInput = utils.getByLabelText('years-to-grow')
  const btn = utils.getByText("Calculate");
  return {
    baseInput,
    interestInput,
    yearsInput,
    btn,
    ...utils
  };


}

afterEach(cleanup);

describe("InputArea", () => {
  it("should display inputs and button on the page", () => {
    const { getByText, getByLabelText } = setup();
    expect(getByText("Calculate")).toBeTruthy();
    expect(getByLabelText("base-amount")).toBeTruthy();
    expect(getByLabelText("annual-interest")).toBeTruthy();
    expect(getByLabelText("years-to-grow")).toBeTruthy();
  });

  it('should return 732.81 given 100, 10 percent, 20 years', async () => {
    const {baseInput, interestInput, yearsInput, btn, getByText} = setup();
    fireEvent.change(baseInput, {target: {value: 100}});
    fireEvent.change(interestInput, {target: {value: 10}});
    fireEvent.change(yearsInput, {target: {value: 20}});
    fireEvent.click(btn);
    await wait(() => {expect(getByText("732.81")).toBeTruthy()})
  })
})
