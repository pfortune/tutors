import type { PageLoad } from "./$types";
import { courseService } from "$lib/services/course";
import type { Topic } from "$lib/services/models/lo-types";

export const ssr = false;

export const load: PageLoad = async ({ params, url, fetch }) => {
  let topicId = url.pathname;
  const topic = (await courseService.readTopic(params.courseid, topicId, fetch)) as Topic;

  return {
    topic: topic
  };
};
