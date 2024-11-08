type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  type Size = Circle | Rectangle;
  
  function calculateShapeArea(shape: Size): number {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius ** 2;
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    }
    throw new Error("Invalid");
  }