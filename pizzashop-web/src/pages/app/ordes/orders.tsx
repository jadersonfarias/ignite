import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3x1 font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-x-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[64px]"></TableHead>
              <TableHead className="w-[140px]">Identificador</TableHead>
              <TableHead className="w-[180px]">realizado há</TableHead>
              <TableHead className="w-[140px]">Status</TableHead>
              <TableHead>cliente</TableHead>
              <TableHead className="w-[140px]">Total do pedido</TableHead>
              <TableHead className="w-[164px]"></TableHead>
              <TableHead className="w-[132px]"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <Button variant="outline" size="xs">
                      <Search className="h-3 w-3" />
                      <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                  </TableCell>
                  <TableCell className="texte-xs font-mono font-medium">
                    2420uf23uf923ur2
                  </TableCell>
                  <TableCell className="text-muted-foregroud">
                    há 15 minutos
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-400" />
                      <span className="font-medium text-muted-foreground">
                        Pendente
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    Diego schell Fernandes
                  </TableCell>
                  <TableCell className="font-medium">R$150,00</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="xs">
                      <ArrowRight className="mr-2 h-3 w-3" />
                      Aprovar
                    </Button>
                  </TableCell>

                  <TableCell>
                    <Button variant="ghost" size="xs">
                      <X className="mr-2 h-3 w-3" />
                      Cancelar
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
