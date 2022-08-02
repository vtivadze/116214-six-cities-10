import { useAppDispatch } from '../../hooks';
import { changeSortingType } from '../../store/action';

type Prop = {
  itemSortingType: string;
  currentSortingType: string;
  handleSortingTypeChange: () => void;
};

function SortingItem({
  itemSortingType,
  currentSortingType,
  handleSortingTypeChange,
}: Prop): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeSortingType(itemSortingType));
    handleSortingTypeChange();
  };

  return (
    <li
      className={`places__option ${
        itemSortingType === currentSortingType ? 'places__option--active' : ''
      }`}
      tabIndex={0}
      onClick={handleClick}
    >
      {itemSortingType}
    </li>
  );
}

export default SortingItem;
