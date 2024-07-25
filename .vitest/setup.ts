import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
// https://github.com/testing-library/jest-dom?tab=readme-ov-file#with-vitest
import '@testing-library/jest-dom/vitest';

// https://vanilla-extract.style/documentation/test-environments/#disabling-runtime-styles
import '@vanilla-extract/css/disableRuntimeStyles';

afterEach(cleanup);
