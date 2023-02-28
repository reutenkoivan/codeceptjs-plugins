import { randomBytes } from 'crypto'

type InputType = {
  id?: string;
  tests?: any[];
}

// Old version of codeceptjs sometimes doesn't have id in the test data
export const createMissedId = <T extends InputType>(data: T): T & { id: string } => {
  if (data.tests) {
    data.tests = data.tests.map(createMissedId)
  }

  if (data.id && data.id.length === 28) {
    return data as T & { id: string }
  }

  data.id = randomBytes(20).toString('base64')

  return data as T & { id: string }
}
