function Container({ children }) {
  return (
    <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
      {children}
    </div>
  );
}

export default Container;