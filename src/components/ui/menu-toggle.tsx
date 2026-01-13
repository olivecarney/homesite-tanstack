import { motion } from "framer-motion";

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ isOpen }: { isOpen: boolean }) => (
    <motion.svg
        width="20"
        height="20"
        viewBox="0 0 23 23"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        whileHover="hover"
    >
        <Path
            variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
                hover: { d: "M 2 2.5 L 20 2.5", y: -1 }
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
                hover: { opacity: 1 }
            }}
            transition={{ duration: 0.1 }}
        />
        <Path
            variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
                hover: { d: "M 2 16.346 L 20 16.346", y: 1 }
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
    </motion.svg>
);
