import prismadb from "@/lib/prismadb";

interface DashboarrdpageProps {
    params: {storeId: string}
};



const DashboardPage: React.FC<DashboarrdpageProps> =async ({
params
})=> {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    });

        return (
            <div>
            ActiveStore: {store?.name}
            </div>
        );

}

export default DashboardPage;