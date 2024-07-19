import React, { useEffect } from "react";
import Todo from "../../components/Todo";

const HomePage = () => {
  
  useEffect(() => {
    document.title = "Todo List";
  }, []);

  return (
    <div>
      <Todo />
    </div>
  );
};

export default HomePage;
