const register = (req: any, res: any) => {
    console.log('sample')
  res.send("Register user");
};

const login = (req: any, res: any) => {
  res.send("Login user");
};

export { register, login };
