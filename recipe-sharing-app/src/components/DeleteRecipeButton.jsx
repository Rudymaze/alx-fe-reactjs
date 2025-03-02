import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId, onCancel }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    onCancel();
  };

  return (
    <div>
      <p>Are you sure you want to delete this recipe?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeleteRecipeButton;
