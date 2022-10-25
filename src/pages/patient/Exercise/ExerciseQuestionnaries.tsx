import {
  Box,
  Divider,
  Grid,
  GridItem,
  Progress,
  Spacer,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllAnswersForSession,
  getAssignedQuestionnaire as getAssignedQuestionnarie,
} from "../../../state/ducks/questionnaires/questionnaries.actions";
import { Answer } from "../../../state/ducks/questionnaires/questionnaries.interface";
import { getSessionData } from "../../../state/ducks/sensors/sensors.actions";
import { AppDispatch, RootState } from "../../../state/store";

const ExerciseQuestionnaries = () => {
  const { patientId, exerciseId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { questionnaire } = useSelector(
    (state: RootState) => state.questionnaries
  );
  const { sessionData } = useSelector((state: RootState) => state.sensorData);
  const { answers } = useSelector((state: RootState) => state.answer);
  const [sortedAnswers, setSortedAnswers] = useState<Answer[] | undefined>(
    undefined
  );

  const fetchQuestionnaire = () => {
    if (patientId && sessionData?.sensor) {
      dispatch(
        getAssignedQuestionnarie({
          userId: patientId,
          sensor: sessionData.sensor,
        })
      );
    }
  };

  const fetchSensorData = () => {
    if (exerciseId && !sessionData) dispatch(getSessionData(exerciseId));
  };

  const fetchAnswers = () => {
    if (exerciseId && questionnaire?.id) {
      dispatch(
        getAllAnswersForSession({
          questionnaireId: questionnaire.id,
          sessionId: exerciseId,
        })
      );
    }
  };

  useEffect(() => {
    fetchSensorData();
    fetchQuestionnaire();
    fetchAnswers();
    if (answers && answers.length >= 2) {
      setSortedAnswers(
        answers.slice().sort((n1, n2) => {
          if (n1.createdAt > n2.createdAt) {
            return 1;
          }
          if (n1.createdAt < n2.createdAt) {
            return -1;
          }
          return 0;
        })
      );
    }
  }, [questionnaire?.id, sessionData?.sensor, answers?.length]);

  return (
    <Box>
      {questionnaire && sortedAnswers ? (
        <Box
          borderWidth={"1px"}
          minW={450}
          maxW={900}
          borderRadius={"lg"}
          margin={5}
          bg={"gray.50"}
          p={5}
        >
          <Text fontWeight={500} fontSize={"2xl"}>
            {questionnaire.name}
          </Text>
          <Divider mb={2} borderColor={"black"} borderWidth={1} />
          <Wrap spacing={10}>
            {questionnaire.questions.map((value, qindex) => (
              <WrapItem key={qindex}>
                <Box key={qindex}>
                  <Text decoration={"underline"} fontSize={"lg"}>
                    {value.question}
                  </Text>
                  <Box display="flex">
                    <Box>
                      <Text ml={20} fontSize={"md"}>
                        {value.minVal}
                      </Text>
                    </Box>
                    <Spacer />
                    <Box>
                      <Text fontSize={"md"}>{value.maxVal}</Text>
                    </Box>
                  </Box>
                  <Grid mb={10} templateColumns="repeat(14, 1fr)" gap={3}>
                    {sortedAnswers.map((value, index) => (
                      <>
                        <GridItem colSpan={2} w="100%" h="20px">
                          {!index ? "Before" : "After"}
                        </GridItem>
                        <GridItem colSpan={1} w="100%" h="20px">
                          <Text align={"end"}>0</Text>
                        </GridItem>
                        <GridItem colSpan={10} w="100%" h="20px">
                          <Tooltip hasArrow label={value.answers[index]}>
                            <Box>
                              <Progress
                                colorScheme={"blue"}
                                height={"20px"}
                                value={value.answers[index] * 10}
                              />
                            </Box>
                          </Tooltip>
                        </GridItem>
                        <GridItem colSpan={1} w="100%" h="20px">
                          {10}
                        </GridItem>
                      </>
                    ))}
                  </Grid>
                  <Divider />
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      ) : (
        <Text>No questionnaire</Text>
      )}
    </Box>
  );
};

export default ExerciseQuestionnaries;
