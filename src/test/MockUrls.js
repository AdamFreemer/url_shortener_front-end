const Rows = [
    {
      id: 1,
      views: 3,
      title: "Apple, Inc.",
      url: "http://www.apple.com",
      short_url: "https://micro-url-api.herokuapp.com/a"
    },
    {
      id: 2,
      views: 5,
      title: "CNN",
      url: "http://www.cnn.com",
      short_url: "https://micro-url-api.herokuapp.com/v"
    },
    {
      id: 3,
      views: 2,
      title: "Ford, Inc.",
      url: "http://www.ford.com",
      short_url: "https://micro-url-api.herokuapp.com/x"
    }
  ];

  const ResponseOk = {
    response: {
      status: 200
    }
  }

  const ResponseDup = {
    response: {
      status: 200
    }
  }

export { Rows, ResponseOk, ResponseDup };