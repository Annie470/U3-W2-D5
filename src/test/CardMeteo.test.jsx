import {describe, it, expect} from 'vitest'
import { render, screen } from "@testing-library/react";
import MeteoMain from "../components/MeteoMain";

describe("Test initial mounting", () => {
  it(`checks if CardMeteo component's <p> is in the DOM`, ()=>{
    render(<MeteoMain city={null} />)
    const p = screen.queryByText(/i see/i)
    expect(p).not.toBeInTheDocument();
  })
});