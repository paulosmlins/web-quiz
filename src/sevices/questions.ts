import axios from "axios";
import Question from "types/Question";

export const listQuestions = async (count: number): Promise<Question[]> => {
  try {
    const response = await axios.get<any>(
      `https://opentdb.com/api.php?amount=${count}`
    );

    return response.data.results;
  } catch (e) {
    return [];
  }
};
