import { beforeEach, describe, expect, it } from 'vitest'
import { captor, mock, MockProxy } from 'vitest-mock-extended'

interface MockInt {
    getNumber: (n: number) => number
}

describe('mock bug demo', () => {
    it('eratio08/vitest-mock-extended/issues/631', () => {
        const mockObj = mock<MockInt>()
        const argCaptor = captor()
        mockObj.getNumber.calledWith(argCaptor).mockReturnValue(1)

        const result = mockObj.getNumber(2)
        expect(result).toBe(1)
        expect(argCaptor.value).toBe(2)
    })
})
