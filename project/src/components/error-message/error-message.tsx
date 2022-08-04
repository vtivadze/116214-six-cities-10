import {useAppSelector} from '../../hooks';
import './error-message.css';
import { selectError } from '../../utils';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(selectError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default ErrorMessage;
