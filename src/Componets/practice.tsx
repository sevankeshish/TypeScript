import { FC } from "react";

export const Component1 = (props: { title: string }) => {
  return (
    <div>
      <span>{props.title}</span>
    </div>
  );
};

export interface obj {
  title: string;
  age: number;
}

export const Component2: FC<obj> = ({ title }) => {
  return (
    <div>
      <span>{title}</span>
    </div>
  );
};

export const Component3: FC<obj> = ({ age }) => {
  return (
    <div>
      <span>{age}</span>
    </div>
  );
};

export interface array {
  id: number;
  name: string;
  age: number;
}

const data: array[] = [
  { id: 1, name: "sevan", age: 20 },
  { id: 2, name: "romel", age: 30 },
];

export const Component4 = () => {
  return (
    <div>
      {data.map((e: array) => {
        return (
          <span key={e.id}>
            {e.name} {e.age}
          </span>
        );
      })}
    </div>
  );
};
