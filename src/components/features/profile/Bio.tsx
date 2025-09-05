import { Text } from "@/components/ui";

export const Bio = () => {

    type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    const preferredSize: Size = "sm";
    return (
        <div className="space-y-2">
            <Text text='justify' size={preferredSize}>
                I’m a software developer with experience in backend, frontend, and desktop apps. I’ve worked on e-commerce projects, ERP systems, and more across different companies.
            </Text>
            
            <Text text='justify' size={preferredSize}>
                I enjoy structuring and architecting apps, making sure everything is built the right way from the start. I like thinking through the best approach to organize code and ensure the app is scalable and maintainable in the long run.
            </Text>
            
            <Text text='justify' size={preferredSize}>
                I’m always looking for ways to grow and improve in the industry. I love staying up to date with new technologies, and I’m excited to keep learning and taking new challenges to level up my skills.
            </Text>
        </div>
    )
}