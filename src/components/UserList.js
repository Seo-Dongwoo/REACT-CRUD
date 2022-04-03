import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  console.log(users);

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem
              className="d-flex"
              style={{ justifyContent: "space-between" }}
            >
              <strong style={{ paddingTop: "6px" }}>{user.name}</strong>
              <div className="ml-auto">
                <Link
                  className="btn btn-warning "
                  style={{ marginRight: "5px" }}
                  to={`/edit/${user.id}`}
                >
                  변경
                </Link>
                <Button onClick={() => removeUser(user.id)} color="danger">
                  삭제
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">할일 없다.</h4>
      )}
    </ListGroup>
  );
};
