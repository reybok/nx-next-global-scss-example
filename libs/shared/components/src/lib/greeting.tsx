// import '../../../../../node_modules/carbon-components/scss/globals/scss/styles.scss';
import 'carbon-components/scss/globals/scss/styles.scss';
import styles from './greeting.module.scss';
import { Loading } from 'carbon-components-react';

export interface GreetingProps {
  location: string;
}

export function Greeting({ location }: GreetingProps) {
  return (
    <div id={styles.greeting}>
      <h1>
        <span> Hello there, </span>
        welcome to {location} 👋
      </h1>
      <Loading description="Loading indicator" withOverlay={false} />
      <p>Loading...</p>
    </div>
  );
}

export default Greeting;
