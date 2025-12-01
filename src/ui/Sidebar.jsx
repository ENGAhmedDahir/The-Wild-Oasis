import { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${(props) => (props.$isOpen ? "0" : "-100%")};
    width: 26rem;
    height: 100vh;
    z-index: 1000;
    transition: left 0.3s ease-in-out;
    box-shadow: ${(props) =>
      props.$isOpen ? "2px 0 8px rgba(0, 0, 0, 0.1)" : "none"};
  }

  @media (max-width: 640px) {
    width: 80%;
    max-width: 30rem;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 1.6rem;
    left: 1.6rem;
    z-index: 1001;
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);
    border-radius: 0.5rem;
    padding: 0.8rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-grey-100);
    }

    &:active {
      background-color: var(--color-grey-200);
    }
  }
`;

const HamburgerIcon = styled.div`
  width: 2.4rem;
  height: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    height: 0.3rem;
    width: 100%;
    background-color: var(--color-brand-700);
    border-radius: 0.2rem;
    transition: all 0.3s ease-in-out;
  }

  ${(props) =>
    props.$isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(0.6rem, 0.6rem);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translate(0.7rem, -0.7rem);
    }
  `}
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HamburgerButton onClick={toggleSidebar} aria-label="Toggle menu">
        <HamburgerIcon $isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>
      </HamburgerButton>

      <Overlay $isOpen={isOpen} onClick={closeSidebar} />

      <StyledSidebar $isOpen={isOpen}>
        <Logo />
        <MainNav onClick={closeSidebar} />
        <Uploader />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
