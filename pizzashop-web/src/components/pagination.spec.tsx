import { render } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { Pagination } from "./pagination"

const onPageChangeCallback = vi.fn() //

describe('Pagination', () => {
    beforeEach(() => {
        onPageChangeCallback.mockClear()
      })
      
    it(' should display the right amount of pages and results ', () => {
        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={200}
                perPage={10}
                onPageChange={() => {}}
            />,
        )

        expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
        expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
    })

    it(' should be able to navigate to the next page ', async () => {
        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={200}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />,
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Próxima página',
        }) //getByRole= pode pegar algum elementos com base no texto tipo um button

         const user = userEvent.setup() //faz a ação de click

       await  user.click(nextPageButton)
      
       expect(onPageChangeCallback).toHaveBeenCalledWith(1) //eu espero que a função seja chamada com o parametro um
    })

    it(' should be able to navigate to the privious page ', async () => {
        const wrapper = render(
            <Pagination
                pageIndex={5}
                totalCount={200}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />,
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Página anterior',
        }) //getByRole= pode pegar algum elementos com base no texto tipo um button

         const user = userEvent.setup() //faz a ação de click

       await  user.click(nextPageButton)
      
       expect(onPageChangeCallback).toHaveBeenCalledWith(4) //eu espero que a função seja chamada com o parametro um
    })

    it(' should be able to navigate to the next page ', async () => {
        const wrapper = render(
            <Pagination
                pageIndex={5}
                totalCount={200}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />,
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Primeira página',
        }) //getByRole= pode pegar algum elementos com base no texto tipo um button

         const user = userEvent.setup() //faz a ação de click

       await  user.click(nextPageButton)
      
       expect(onPageChangeCallback).toHaveBeenCalledWith(0) //eu espero que a função seja chamada com o parametro um
    })

    it('should be able to navigate to the last page', async () => {
        const user = userEvent.setup()
    
        const wrapper = render(
          <Pagination
            pageIndex={0}
            totalCount={200}
            perPage={10}
            onPageChange={onPageChangeCallback}
          />,
        )
    
        const nextPageButton = wrapper.getByRole('button', {
          name: 'Última página',
        })
    
        await user.click(nextPageButton)
    
        expect(onPageChangeCallback).toHaveBeenCalledWith(19)
      })
})