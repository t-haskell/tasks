// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { table } from "console";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published === true
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const completeQuestions = questions.filter(
        (question: Question): boolean =>
            question.body.length !== 0 ||
            question.expected.length !== 0 ||
            question.options.length !== 0
    );
    return completeQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const wantedQuestion = questions.find(
        (question: Question): boolean => question.id === id
    );
    return wantedQuestion === undefined ? null : wantedQuestion;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter(
        (question: Question): boolean => question.id !== id
    );
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const listOfNames = questions.reduce(
        (currListOfNames: string[], question: Question) =>
            currListOfNames.concat(question.name),
        []
    );
    return listOfNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (currTotal: number, question: Question) => currTotal + question.points,
        0
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions.reduce(
        (currTotal: number, question: Question) =>
            question.published ? currTotal + question.points : currTotal + 0,
        0
    );
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const returningStr = questions.map(
        (question: Question): string =>
            "\n" +
            question.id.toString() +
            "," +
            question.name +
            "," +
            question.options.length.toString() +
            "," +
            question.points.toString() +
            "," +
            question.published
    );
    return returningStr.reduce(
        (finalAns: string, value: string): string => finalAns + value,
        "id,name,options,points,published"
    );
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.reduce(
        (answers: Answer[], question: Question) =>
            answers.concat({
                questionId: question.id,
                text: "",
                submitted: false,
                correct: false
            }),
        []
    );

    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.reduce(
        (publishedQuestions: Question[], questions: Question) =>
            publishedQuestions.concat({ ...questions, published: true }),
        []
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let testType: string | null = null;
    if (questions.length > 0) {
        testType = questions[0].type;
    }
    return questions.every(
        (question: Question): boolean => question.type === testType
    );
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestions = [...questions, makeBlankQuestion(id, name, type)];
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newQuestions = questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? { ...question, name: newName }
                : { ...question }
    );
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newQuestions = questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? newQuestionType === "short_answer_question"
                    ? { ...question, type: newQuestionType, options: [] }
                    : { ...question, type: newQuestionType }
                : { ...question }
    );
    return newQuestions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const newQuestions = questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? targetOptionIndex === -1
                    ? putOptionOnEnd(question, newOption)
                    : putOptionAtIndex(question, newOption, targetOptionIndex)
                : { ...question }
    );
    return newQuestions;
}
export function putOptionOnEnd(
    question: Question,
    addingOption: string
): Question {
    const newQ = { ...question, options: [...question.options, addingOption] };
    return newQ;
}
export function putOptionAtIndex(
    question: Question,
    addingOption: string,
    targetIndex: number
): Question {
    const optionList = [...question.options];
    optionList[targetIndex] = addingOption;
    const newQ = { ...question, options: optionList };
    return newQ;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const indexOfTarget = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const copy = duplicateQuestion(newId, questions[indexOfTarget]);
    const withDup = [...questions];
    withDup.splice(indexOfTarget + 1, 0, copy);
    return withDup;
}
