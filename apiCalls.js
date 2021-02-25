import axios from "axios";

export const newFunc = () => {
  return {
    name: "rohit",
    age: 23,
  };
};

export const apidata = async () => {
  return {
    urls: ["net-training", "adobe-cq5-training"],
  };
};

export const formSubmit = async (data) => {
  try {
    await axios.post(`${process.env.BACKEND_URL}/dev/form/submit-form`, data);
    return new Promise((resolve, reject) => {
      return resolve({
        success: true,
      });
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve({
        success: false,
      });
    });
  }
};

export const getTrendingCourses = async () => {
  try {
    const courses = await axios.get(
      `${process.env.BACKEND_URL}/dev/course/trending`
    );
    return new Promise((resolve, reject) => {
      return resolve(courses.data.data.courses);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getPopularCategories = async () => {
  try {
    const cats = await axios.post(
      `${process.env.BACKEND_URL}/dev/category/popular-cats`
    );

    if (cats.data.success) {
      return new Promise((resolve, reject) => {
        return resolve(cats.data.data);
      });
    } else {
      // console.log(courses);
      throw "Some error";
    }
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getCountryCodeFromIP = async () => {
  try {
    const metadata = await axios.get("https://api.ipify.org?format=json");
    const details = await axios.get(
      `https://ipapi.co/${metadata.data.ip}/json`
    );
    return details.data;
  } catch (error) {
    console.log(error);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getCourseData = async (slug) => {
  try {
    // const course = await axios.post(
    //   "http://localhost:3000/dev/course/details",
    //   { slug }
    // );
    const course = await axios.post(
      "https://h46pfmig2c.execute-api.us-west-2.amazonaws.com/dev/course/details",
      { slug }
    );
    return { ...course.data.data };
  } catch (error) {
    console.log(error);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getDemoDates = async () => {
  try {
    const getDates = await axios.post(
      "https://h46pfmig2c.execute-api.us-west-2.amazonaws.com/dev/demodates/all"
    );
    return [...getDates.data.data];
  } catch (error) {
    console.log(error);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getCourseHeadings = async (courseId) => {
  try {
    const headings = await axios.get(
      `http://localhost:3000/dev/courseheading/${courseId}`
    );
    return { ...headings.data.data };
  } catch (error) {
    console.log(error);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getBlogsAll = async (courseId) => {
  const datas = {
    offset: 1,
    limit: 5,
  };

  try {
    const { data: data } = await axios.post(
      `http://localhost:3000/dev/blog/all`,
      datas
    );
    // return { ...headings.data.data };

    console.log(data);
  } catch (error) {
    console.log(error);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};
