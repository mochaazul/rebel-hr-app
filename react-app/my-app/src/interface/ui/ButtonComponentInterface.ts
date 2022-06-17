
export interface IButtonComponent extends React.HTMLAttributes<HTMLButtonElement>{
  label: string;
  loading?: boolean;
  type: 'primary' | 'danger' | 'warning' | 'success';
}