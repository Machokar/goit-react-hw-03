export const Searchbox = ({ values, onChanges }) => {
  return (
    <div>
      <p>SearchBar</p>
      <input
        type="text"
        value={values}
        onChange={evt => {
          onChanges(evt.target.value);
        }}
      />
    </div>
  );
};
