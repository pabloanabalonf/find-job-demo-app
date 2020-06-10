import React from 'react';
import {FlatList} from 'react-native';
import JobLayout from './job-layout';
import EmptyJob from './job-list-empty';
import VerticalSeparator from './job-vertical-separator';
import Job from './job-item';

const JobList = (props) => {
  let title = "Works for you"
  let emptyText = props.isLoading ? 'Loading' : 'No jobs found :c';

  if (props.jobs.length > 0) {
    title = `Works for you in '${props.jobSearched}' | (${props.jobs.length} found)`
  }

  return (
    <JobLayout title={title}>
      <FlatList
        data={props.jobs}
        ListEmptyComponent={() => <EmptyJob text={emptyText} />}
        ItemSeparatorComponent={() => <VerticalSeparator />}
        renderItem={({ item }) => <Job {...item} />}
      />
    </JobLayout>
  );
};

export default JobList;