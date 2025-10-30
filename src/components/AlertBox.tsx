import { Children } from "react";

export type AlertType = 'success' | 'error' | 'warning' | 'info';
 
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}
function AlertBox({type, massage, onClose, children}: AlertBoxProps){

  const alertStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100, border-red-500, text-red-700',
    warning: 'bg-yellow-100 border-blue-500 text-blue-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700'
  };
  
return(
  <div className = {`p-5 border-1-4 ${alertStyles[type]}`}>
    <div className="flex justify-between items-center">
      <p>{massage}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-gray-700 hover:text-gray-900">
          Close
        </button>
      )}
    </div>
  {children}
  </div>
);
};

export default AlertBox;