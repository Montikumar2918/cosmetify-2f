import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { medium, small } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

//styled comp
const NavContainer = styled.div`
  background-color: black;
  color: rgb(222,184,135);
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  ${medium({ height: "50px", padding: " 10px 0" })}
`;
const Left = styled.div`
  font-family: "Cookie", cursive;
  cursor: pointer;
  font-size: 3rem;
  flex: 1;
  text-decoration: none;
  color: rgb(192,192,192);

  ${medium({ fontSize: "2rem", marginRight: "0", flex: "0" })}
  ${small({ fontSize: "1rem" })}
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  display: flex;
  gap: 0.8rem;
  justify-content: end;
  ${medium({ flex: "0", marginRight: "0.65rem" })}
  ${small({ fontSize: "0.5rem !important", gap: "0.2rem" })}
`;
const Item = styled.div`
  margin-top: 10px;

  & > * {
    cursor: pointer;
    font-size: 1.12rem;
    ${small({ fontSize: "0.4rem !important" })}
    ${medium({ fontSize: "1rem !important" })}
  }
`;

const AdminNav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("user details", user);
  const history = useNavigate();
  return (
    <NavContainer>
      <Wrapper>
        <Link to="/adminHome" style={{ textDecoration: "none" }}>
          <Left>
            <p style={{ textDecoration: "none" }}>COSMETIFY </p>
          </Left>
        </Link>
        <Right>
          {user.currentUser && (
            <>
              <Item>
                <p style={{ width: "6.5rem" }}>
                𝓗𝓲,
                  {user.currentUser.username}
                </p>
              </Item>
            </>
          )}

          {!user.currentUser && (
            <>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Item>
                  <p>LogIn</p>
                </Item>
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Item>
                  <p>Register</p>
                </Item>
              </Link>
            </>
          )}

          <Link
            to="/adminProductList"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Item>
              <p>Products</p>
            </Item>
          </Link>
          <Link
            to="/adminUserList"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Item>
              <p>Users</p>
            </Item>
          </Link>

          {user.currentUser && (
            <>
              <Item>
                <p
                  onClick={() => {
                    dispatch({ type: "logOut" });
                    history("/");
                  }}
                >
                  LogOut
                </p>
              </Item>
            </>
          )}
        </Right>
      </Wrapper>
    </NavContainer>
  );
};

export default AdminNav;
