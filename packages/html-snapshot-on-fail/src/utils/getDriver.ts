import { container } from 'codeceptjs'
import { supportedDrivers } from '../constants'

export const getDriver = (): void | object => {
  const helpers = container.helpers()

  for (const driverName of supportedDrivers) {
    const driver = helpers[driverName]

    if (driver) {
      return driver
    }
  }
}
