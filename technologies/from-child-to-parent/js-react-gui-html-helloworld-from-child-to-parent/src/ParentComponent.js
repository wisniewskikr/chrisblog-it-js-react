import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  // Callback to receive data from the child
  const callback = (data) => {
    console.log("Data from Child:", data);
  };

  return (
    <div>
      {/* Pass the callback to the child */}
      <ChildComponent fromChild={callback} />
    </div>
  );
};
export default ParentComponent;