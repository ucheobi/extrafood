export type AppProps = {
    message: string;
    value: string;
    email: string;
    password: string;
    handler: () => void;
    price: number;
    disabled: boolean;
    /** array of a type! */
    names: string[];
    /** string literals to specify exact string values, with a union type to join them together */
    status: "waiting" | "success";
    /** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
    obj: object;
    obj2: {}; // almost the same as `object`, exactly the same as `Object`
    /** an object with any number of properties (PREFERRED) */
    obj3: {
      id: string;
      title: string;
    };
    /** array of objects! (common) */
    objArr: {
      id: string;
      title: string;
    }[];
    /** a dict object with any number of properties of the same type */
    /** any function as long as you don't invoke it (not recommended) */
    onSomething: Function;
    /** function that doesn't take or return anything (VERY COMMON) */
    onClick: () => void;
    /** function with named prop (VERY COMMON) */
    onChange: (e: React.SyntheticEvent) =>  void; 
    /** alternative function type syntax that takes an event (VERY COMMON) */
  
  };