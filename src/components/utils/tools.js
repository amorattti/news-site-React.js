import { toast } from 'react-toastify';

const showToast = (type, msg) => {
  switch (type) {
   case 'SUCCESS':
      toast.success(msg, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
     break;
   case 'ERROR':
      toast.error(msg, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
     break;
 
   default:
     break;
 }
}

export default showToast;