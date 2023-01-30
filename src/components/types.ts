export type ChildrenProps = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export type FormChildrenProps = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  title?: string;
};

export type LabelProps = {
  label?: string;
};
